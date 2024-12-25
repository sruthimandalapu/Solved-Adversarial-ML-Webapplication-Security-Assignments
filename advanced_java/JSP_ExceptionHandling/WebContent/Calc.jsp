<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page errorPage="ErrorPage.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
int num1=Integer.parseInt(request.getParameter("n1"));
int num2=Integer.parseInt(request.getParameter("n2"));
int res=num1/num2;
out.println("Result is : "+res);
%>
</body>
</html>