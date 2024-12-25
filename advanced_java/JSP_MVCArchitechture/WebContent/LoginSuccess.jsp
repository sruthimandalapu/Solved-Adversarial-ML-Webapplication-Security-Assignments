<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Success</title>
<%@ page import="mvc.LoginMvcBean" %>
</head>
<body>
<h1>You have successfully logged in!</h1>
<%
LoginMvcBean bean=(LoginMvcBean)request.getAttribute("l");
out.println("Welcome : "+bean.getUname());
%>
</body>
</html>