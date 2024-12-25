import java.sql.*;
public class MyConnection{
	
	private final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
 	private String DB_URL = "";
    private final String USERNAME="root";
	private final String PASSWORD="";
	private Connection conn;
	private Statement stmt;
	
	public Statement getStmt() {
		return stmt;
	}
	public int operations(String st)throws SQLException {
		return stmt.executeUpdate(st);
	}
	public void createStatement()throws SQLException {
		this.stmt=this.conn.createStatement();
	}
	public ResultSet getResultSet(String sql) throws SQLException{
		return stmt.executeQuery(sql);
	}
	public void close()throws SQLException {
		this.conn.close();
		this.stmt.close();
		System.out.println("Closing the Resources....");
	}
	public MyConnection(){
        this.DB_URL="jdbc:mysql://localhost/";
		conn=null;
		stmt=null;
	}
	public MyConnection(String dbName)throws ClassNotFoundException,SQLException{
		
		this.DB_URL="jdbc:mysql://localhost/"+dbName;
		
		Class.forName("com.mysql.jdbc.Driver");
			
		//STEP 3: Open a Connection 
		System.out.println("Connecting to database ....");
		this.conn=DriverManager.getConnection(DB_URL,USERNAME,PASSWORD);
		System.out.println("Successfully Connected to the database... ");
	}
}
		
