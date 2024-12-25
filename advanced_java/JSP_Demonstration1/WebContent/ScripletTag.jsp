<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<% int count=0; %>
</head>
<body>
<% for(int i=1;i<=10;i++){ %>
<table>
<tr>
<td>
<% out.println("7 * "+i+" = "+7*i); %>
</td>
</tr>
</table>
<% } %>
<% out.println("The value of the count is : "+(++count)); %>
</body>
</html>