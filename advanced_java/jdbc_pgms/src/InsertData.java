import java.sql.*;

public class InsertData {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost/ajp","root","");
			Statement stmt=conn.createStatement();
			String sql="UPDATE studies set PNAME='sravani' WHERE PNAME='Patrick'";
			int num=stmt.executeUpdate(sql);
			System.out.println(num+" row(s) selected");
			conn.close();
		}catch(Exception e) {
			System.out.println(e);
		}
	}

	}
 