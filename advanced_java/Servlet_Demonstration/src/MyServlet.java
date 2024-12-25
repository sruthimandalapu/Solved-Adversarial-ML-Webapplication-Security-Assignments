import javax.servlet.http.*;
import java.io.*;
import javax.servlet.*;
public class MyServlet extends HttpServlet
{
   //overriding doGet() method
   public void doGet(HttpServletRequest req,HttpServletResponse res) throws ServletException,IOException
   {
         res.setContentType("text/html");
         PrintWriter out=res.getWriter();
         out.println("<html><body>");
         out.println("<h1>Welcome to my sample Servlet</h1>");
         out.println("</body></html>");
   }
}
