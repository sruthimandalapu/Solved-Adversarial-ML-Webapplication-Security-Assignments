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
<jsp:useBean id="beanobj" class="jspbean.SimpleBean">
<%
beanobj.setNum(5);
out.println(beanobj.getNum());
%>
</jsp:useBean>
--%>

<%-- 
<jsp:useBean id="beanobj" class="jspbean.SimpleBean"></jsp:useBean>
<jsp:setProperty property="num" name="beanobj" value="10"/>
The value of num is : <%= beanobj.getNum() %>
<br>
The value of num is : <jsp:getProperty property="num" name="beanobj"/>
--%>

<jsp:useBean id="beanobj" class="jspbean.SimpleBean" scope="session"></jsp:useBean>
<jsp:setProperty property="num" name="beanobj" value="10"/>

<a href="Bean2.jsp">Visiting the next JSP Page</a>

</body>
</html>