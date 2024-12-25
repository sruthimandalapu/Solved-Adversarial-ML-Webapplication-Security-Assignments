package jdbc_pgms;

import java.sql.*;

public class UpdateStatement {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con= DriverManager.getConnection("jdbc:mysql://localhost:ajp","root","");
			Statement stmt =con.createStatement();
			String sql= "update emp set sal=7000 where ename='sravani';";
			int i= stmt.executeUpdate(sql);
			System.out.println(i);
			con.close();
			}
		catch(Exception e) {
			System.out.println(e);
		}

	}

}
