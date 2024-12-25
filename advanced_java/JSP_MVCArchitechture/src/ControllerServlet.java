

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import mvc.LoginMvcBean;

/**
 * Servlet implementation class ControllerServlet
 */
@WebServlet("/ControllerServlet")
public class ControllerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ControllerServlet() {
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
		String u=request.getParameter("uname");
		String p=request.getParameter("pass");
		LoginMvcBean l=new LoginMvcBean();
		l.setUname(u);
		l.setPasswd(p);
		request.setAttribute("l",l);
		if(l.validate()) {
			RequestDispatcher r=request.getRequestDispatcher("LoginSuccess.jsp");
			r.forward(request,response);
		}
		else {
			RequestDispatcher r1=request.getRequestDispatcher("LoginError.jsp");
			r1.include(request,response);
		}
	}

}
