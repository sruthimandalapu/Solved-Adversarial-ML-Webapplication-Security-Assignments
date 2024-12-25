

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ReqDisp_One
 */
@WebServlet("/ReqDisp_One")
public class ReqDisp_One extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ReqDisp_One() {
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
		
		String uname,pass;
		uname=request.getParameter("n1");
		pass=request.getParameter("p1");
		if(uname.contentEquals("VVIT") && pass.contentEquals("12345")) {
			RequestDispatcher rd1=request.getRequestDispatcher("second");
			rd1.forward(request, response);
		}
		else {
			out.println("<h3> Invalid username/password </h3>");
			RequestDispatcher rd2=request.getRequestDispatcher("file.html");
			rd2.include(request, response);
		}
	}

}
