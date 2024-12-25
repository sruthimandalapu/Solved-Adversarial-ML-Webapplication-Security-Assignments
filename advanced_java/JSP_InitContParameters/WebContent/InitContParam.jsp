<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
String dname=config.getInitParameter("deptname");
String cname=application.getInitParameter("college");
out.println("The Department name is : "+dname);
out.println("The College name is : "+cname);
%>
</body>
</html>