import java.io.*;
import java.util.Enumeration;

import javax.servlet.*;
import javax.servlet.http.*;
public class ServletReq extends HttpServlet{
	public void doGet(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		res.setContentType("text/html");
		PrintWriter out=res.getWriter();
		
		Enumeration<String> e=req.getParameterNames();
		while(e.hasMoreElements())
		{
			String param=(String)e.nextElement();
			out.println(param+" "+req.getParameter(param));
		}
	}
}