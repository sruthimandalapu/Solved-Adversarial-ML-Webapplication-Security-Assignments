import java.sql.*;

public class JdbcDemo {
	
	static final String JDBC_DRIVER="com.mysql.jdbc.Driver";
	static final String DB_URL="jdbc:mysql://localhost/ajp";
	
	//Database Credentials
	static final String USER="root";
	static final String PASS="";

	public static void main(String[] args) throws ClassNotFoundException {
		// TODO Auto-generated method stub

		Connection conn=null;
		Statement stmt=null;
		try {
			
			//STEP 2: Register JDBC driver
			Class.forName("com.mysql.jdbc.Driver");
			
			//STEP 3: Open a Connection 
			System.out.println("Connecting to database ....");
			conn=DriverManager.getConnection(DB_URL,USER,PASS);
			
			//STEP 4: Execute a query
			System.out.println("Creating statement.....");
			stmt=conn.createStatement();
			
			String sql;
			sql="SELECT * FROM studies";
			
			ResultSet rs=stmt.executeQuery(sql);
			
			//STEP 5: Extract data from result set
			while(rs.next()) {
				//Retrieve by column name
				String first=rs.getString("PNAME");
				String last=rs.getString("COURSE");
				
				//Display Values
				System.out.println("First : "+first);
				System.out.println("Last : "+last);
			}
			//STEP 6: Clean-up Environment
			rs.close();
			//stmt.close();
			conn.close();
		}catch(Exception se) {
			//Handle errors for JDBC
			se.printStackTrace();
		}
	}

}

