<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%-- Comments in jsp --%>

<%-- Declaration Tag --%>
<%!
int g; //instance member of the servlet class
int e=2;
int print(){
	return ++g;
}
%>

<%-- Scriplte Tag --%>
<%
int i=10; //local to service method
out.println("i ="+i);
out.println("<br> g = "+g);
out.println("<br> g = "+print());
%>

<%= "<br>" %>
<%= "---------------------------------------" %>
<%= "<br>" %>

<%-- Expression Tag --%>
<%= "Hello World" %>
<%= "<br>" %>
<%= 2*12 %>
<%= "<br>" %>
<%= e %>
<%= "<br>" %>
<%= "------------------------------------------" %>
<%= "<br>" %>

<%-- Directive Tag --%>
<%@ page import="java.util.Date" %>
<%@ include file="file.html" %>
<%= new Date() %>


</body>
</html>