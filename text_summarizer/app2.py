'''
import streamlit as st
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import PyPDFLoader
from transformers import T5Tokenizer, T5ForConditionalGeneration, pipeline
import torch
import base64
import time

# Model and tokenizer
checkpoint = "LaMini-Flan-T5-248M"
tokenizer = T5Tokenizer.from_pretrained(checkpoint)
base_model = T5ForConditionalGeneration.from_pretrained(checkpoint, device_map='auto', torch_dtype=torch.float32)

# File loader and preprocessing
def file_preprocessing(file):
    loader = PyPDFLoader(file)
    pages = loader.load_and_split()
    
    # Modify chunk size and overlap if necessary
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=2000, chunk_overlap=50)
    texts = text_splitter.split_documents(pages)
    
    return texts

# LLM Pipeline
def llm_pipeline(texts):
    pipe_sum = pipeline(
        'summarization',
        model=base_model,
        tokenizer=tokenizer,
        max_length=500,
        min_length=150,
        do_sample=False
    )
    
    summaries = []
    
    for i, text in enumerate(texts):
        input_text = text.page_content
        summary_result = pipe_sum(input_text)
        summary_text = summary_result[0]['summary_text']
        
        # Create a heading based on the index instead of using non-existent metadata
        heading = f"Section {i + 1}"  # Generic heading for each section
        summaries.append((heading, summary_text))  # Capture heading and summary

    return summaries

# Streamlit code
@st.cache_data
def displayPDF(file):
    with open(file, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode('utf-8')
    pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="100%" height="600" type="application/pdf"></iframe>'
    st.markdown(pdf_display, unsafe_allow_html=True)

# Streamlit code
st.set_page_config(layout='wide', page_title="Summarization App")

def main():
    st.title('Document Summarization App using Language Model')
    uploaded_file = st.file_uploader("Upload your PDF File", type=['pdf'])
    
    if uploaded_file is not None:
        if st.button("Summarize"):
            col1, col2 = st.columns(2)
            filepath = "data/" + uploaded_file.name
            
            with open(filepath, 'wb') as temp_file:
                temp_file.write(uploaded_file.read())
                
            with col1:
                st.info("Uploaded PDF File")
                displayPDF(filepath)
                
            with col2:
                st.info("Summarization is below")
                texts = file_preprocessing(filepath)
                summaries = llm_pipeline(texts)
                
                for heading, summary in summaries:
                    st.subheader(heading)
                    st.success(summary)

if __name__ == '__main__':
    start_time = time.time()
    main()
    print(f"Execution time: {time.time() - start_time:.2f} seconds")
'''

'''
import streamlit as st
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import PyPDFLoader
from transformers import T5Tokenizer, T5ForConditionalGeneration, pipeline
import torch
import base64
import re
import time

# Model and tokenizer
checkpoint = "LaMini-Flan-T5-248M"
tokenizer = T5Tokenizer.from_pretrained(checkpoint)
base_model = T5ForConditionalGeneration.from_pretrained(checkpoint, device_map='auto', torch_dtype=torch.float32)

# File loader and preprocessing
def file_preprocessing(file):
    loader = PyPDFLoader(file)
    pages = loader.load_and_split()
    
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=2000, chunk_overlap=50)
    texts = text_splitter.split_documents(pages)
    
    return texts

# Function to extract headings from text
def extract_heading(text):
    # Heuristic: Look for lines that are fully capitalized or have certain keywords
    heading_candidates = re.findall(r'^(.*[A-Z].*)$', text, re.MULTILINE)  # Example heuristic
    return heading_candidates[0] if heading_candidates else "Section"

# LLM Pipeline
def llm_pipeline(texts):
    pipe_sum = pipeline(
        'summarization',
        model=base_model,
        tokenizer=tokenizer,
        max_length=500,
        min_length=150,
        do_sample=False
    )
    
    summaries = []
    
    for i, text in enumerate(texts):
        input_text = text.page_content
        heading = extract_heading(input_text)  # Extract meaningful heading
        summary_result = pipe_sum(input_text)
        summary_text = summary_result[0]['summary_text']
        
        summaries.append((heading, summary_text))  # Capture heading and summary

    return summaries

# Streamlit code
@st.cache_data
def displayPDF(file):
    with open(file, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode('utf-8')
    pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="100%" height="600" type="application/pdf"></iframe>'
    st.markdown(pdf_display, unsafe_allow_html=True)

# Streamlit code
st.set_page_config(layout='wide', page_title="Summarization App")

def main():
    st.title('Document Summarization App using Language Model')
    uploaded_file = st.file_uploader("Upload your PDF File", type=['pdf'])
    
    if uploaded_file is not None:
        if st.button("Summarize"):
            col1, col2 = st.columns(2)
            filepath = "data/" + uploaded_file.name
            
            with open(filepath, 'wb') as temp_file:
                temp_file.write(uploaded_file.read())
                
            with col1:
                st.info("Uploaded PDF File")
                displayPDF(filepath)
                
            with col2:
                st.info("Summarization is below")
                texts = file_preprocessing(filepath)
                summaries = llm_pipeline(texts)
                
                for heading, summary in summaries:
                    st.subheader(heading)
                    st.success(summary)

if __name__ == '__main__':
    start_time = time.time()
    main()
    print(f"Execution time: {time.time() - start_time:.2f} seconds")

'''

'''
import streamlit as st
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import PyPDFLoader
from transformers import T5Tokenizer, T5ForConditionalGeneration
from transformers import pipeline
import torch
import base64
import time

# MODEL AND TOKENIZER
checkpoint = "LaMini-Flan-T5-248M"
tokenizer = T5Tokenizer.from_pretrained(checkpoint)
base_model = T5ForConditionalGeneration.from_pretrained(checkpoint, device_map='auto', torch_dtype=torch.float32)

# File loader and preprocessing
def file_preprocessing(file):
    loader = PyPDFLoader(file)
    pages = loader.load_and_split()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
    texts = text_splitter.split_documents(pages)
    return texts

# Heuristic to extract heading (optional improvement)
def extract_heading(text):
    lines = text.split("\n")
    for line in lines:
        # Example: A heuristic for detecting a heading (lines in all caps or lines with no punctuation)
        if line.isupper() or len(line.split()) < 5:  # Adjust logic based on your documents
            return line.strip()
    return "Section"  # Default heading if no clear heading is found

# LLM Pipeline
def llm_pipeline(filepath):
    pipe_sum = pipeline(
        'summarization',
        model=base_model,
        tokenizer=tokenizer,
        max_length=200,
        min_length=50
    )
    
    documents = file_preprocessing(filepath)
    summaries = []
    
    for doc in documents:
        input_text = doc.page_content
        result = pipe_sum(input_text)
        summary_text = result[0]['summary_text']
        
        # Use a heuristic to extract heading from the text if no metadata
        heading = extract_heading(input_text)  
        summaries.append((heading, summary_text))  # Heading is now extracted

    return summaries

# Streamlit code
@st.cache_data
# Function to display the PDF of a given file
def displayPDF(file):
    with open(file, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode('utf-8')
    pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="100%" height="600" type="application/pdf"></iframe>'
    st.markdown(pdf_display, unsafe_allow_html=True)

# Streamlit code
#st.set_page_config(layout='wide', page_title="Summarization App")

def main():
    st.title('Document Summarization App using Language Model')
    uploaded_file = st.file_uploader("Upload your PDF File", type=['pdf'])
    if uploaded_file is not None:
        if st.button("Summarize"):
            col1, col2 = st.columns(2)
            filepath = "data/" + uploaded_file.name
            with open(filepath, 'wb') as temp_file:
                temp_file.write(uploaded_file.read())
            with col1:
                st.info("Uploaded PDF File")
                displayPDF(filepath)
            with col2:
                st.info("Summarizations are below")
                summaries = llm_pipeline(filepath)
                for heading, summary in summaries:
                    st.markdown(f"### {heading}")
                    st.success(summary)

if __name__ == '__main__':
    start_time = time.time()
    main()
    print(time.time()-start_time)
'''


import streamlit as st
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import PyPDFLoader
from transformers import T5Tokenizer, T5ForConditionalGeneration, pipeline
import torch
import base64
import re
import time

# Model and tokenizer
checkpoint = "LaMini-Flan-T5-248M"
tokenizer = T5Tokenizer.from_pretrained(checkpoint)
base_model = T5ForConditionalGeneration.from_pretrained(checkpoint, device_map='auto', torch_dtype=torch.float32)

# File loader and preprocessing
def file_preprocessing(file):
    loader = PyPDFLoader(file)
    pages = loader.load_and_split()
    
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=2000, chunk_overlap=50)
    texts = text_splitter.split_documents(pages)
    
    return texts

# Function to extract side headings (underlined) and subheadings (bold)
def extract_headings(text):
    # Identify side headings (underlined)
    side_heading_pattern = re.compile(r'(.*)\n[-=]+\n')  # Look for text followed by a line of --- or ===
    side_headings = side_heading_pattern.findall(text)

    # Identify subheadings (bold) - Heuristic: bold subheadings are typically in all caps or start with capital letters
    subheading_pattern = re.compile(r'\*\*(.*?)\*\*')  # Pattern to catch bold text surrounded by ** in markdown
    subheadings = subheading_pattern.findall(text)

    return side_headings, subheadings

# LLM Pipeline
def llm_pipeline(texts):
    pipe_sum = pipeline(
        'summarization',
        model=base_model,
        tokenizer=tokenizer,
        max_length=500,
        min_length=150,
        do_sample=False
    )
    
    summaries = []
    
    for i, text in enumerate(texts):
        input_text = text.page_content
        side_headings, subheadings = extract_headings(input_text)  # Extract side and subheadings
        summary_result = pipe_sum(input_text)
        summary_text = summary_result[0]['summary_text']
        
        summaries.append((side_headings, subheadings, summary_text))  # Capture headings and summary

    return summaries

# Streamlit function to display PDF
@st.cache_data
def displayPDF(file):
    with open(file, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode('utf-8')
    pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="100%" height="600" type="application/pdf"></iframe>'
    st.markdown(pdf_display, unsafe_allow_html=True)

# Streamlit app layout and logic
st.set_page_config(layout='wide', page_title="Summarization App")

def main():
    st.title('Document Summarization App using Language Model')
    
    # File uploader widget
    uploaded_file = st.file_uploader("Upload your PDF File", type=['pdf'])
    
    if uploaded_file is not None:
        if st.button("Summarize"):
            col1, col2 = st.columns(2)
            filepath = "data/" + uploaded_file.name
            
            with open(filepath, 'wb') as temp_file:
                temp_file.write(uploaded_file.read())
                
            with col1:
                st.info("Uploaded PDF File")
                displayPDF(filepath)
                
            with col2:
                st.info("Summarization is below")
                texts = file_preprocessing(filepath)
                summaries = llm_pipeline(texts)
                
                for side_headings, subheadings, summary in summaries:
                    # Display side headings as underlined
                    for heading in side_headings:
                        st.markdown(f'<u><strong>{heading}</strong></u>', unsafe_allow_html=True)
                    
                    # Display subheadings as bold
                    for subheading in subheadings:
                        st.markdown(f"**{subheading}**")

                    # Display summary text
                    st.success(summary)

if __name__ == '__main__':
    start_time = time.time()
    main()
    st.write(f"Execution time: {time.time() - start_time:.2f} seconds")
