import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class LifeCycle extends GenericServlet{
	public void init()throws ServletException{
		System.out.println("hey init() method was invoked");
	}
	public void service(ServletRequest req,ServletResponse res)throws IOException,ServletException {
		System.out.println("hey service() method was invoked");
	}
	public void destroy()
	{
		System.out.println("hey destroy() method was invoked ");
	}
}

