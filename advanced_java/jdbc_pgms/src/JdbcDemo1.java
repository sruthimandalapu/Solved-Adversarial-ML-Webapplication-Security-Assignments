import java.sql.*;
public class JdbcDemo1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try {
			MyConnection obj=new MyConnection("ajp");
			obj.createStatement();
			//Connection conn=obj.getConn();
			//Statement stmt=obj.createStatement();
			ResultSet res=obj.getResultSet("SELECT * From studies");
			while(res.next()) {
				//Retrieve by column name
				String first=res.getString("PNAME");
				String last=res.getString("COURSE");
				
				//Display Values
				System.out.println("PNAME : "+first);
				System.out.println("COURSE : "+last);
			}
			//String st="UPDATE studies SET SPLACE='Apple' WHERE SPLACE='Pragathi'";
			//String st="DELETE FROM studies WHERE SPLACE='Apple'";
			String st="INSERT INTO studies VALUES('Nelson','Pragathi','DAP',6200)";
			int num=obj.operations(st);
			System.out.println(num+" row(s) selected");
			obj.close();
			
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}

}
