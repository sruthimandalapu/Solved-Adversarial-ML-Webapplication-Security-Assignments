<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<%-- 
Name is : <%= request.getParameter("uname") %>
<br>
City is : <%= request.getParameter("city") %>
--%>

Name is : ${param.uname}
<br>
City is : ${param.city}

<%
application.setAttribute("name",request.getParameter("uname"));
application.setAttribute("city",request.getParameter("city"));
%>

<br>
<a href="display2.jsp">Goto next JSP page</a>

</body>
</html>