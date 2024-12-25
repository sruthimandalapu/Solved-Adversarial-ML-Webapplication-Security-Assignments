

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HiddenDemo1
 */
@WebServlet("/HiddenDemo1")
public class HiddenDemo1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HiddenDemo1() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		String name=request.getParameter("name1");
		String pass=request.getParameter("pass1");
		if(name.contentEquals("VVIT") && pass.contentEquals("1234")) {
			out.println("<form method='get' action='second'>");
			out.println("<input type='hidden' name='uname' value='"+name+"'>");
			out.println("<input type='submit'>");
			out.println("</form>");
		}
	}

}
