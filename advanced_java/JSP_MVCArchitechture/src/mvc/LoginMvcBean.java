package mvc;

public class LoginMvcBean {

	private String uname,passwd;
	public void setUname(String uname) {
		this.uname=uname;
	}
	public void setPasswd(String passwd) {
		this.passwd=passwd;
	}
	public String getUname() {
		return uname;
	}
	public String getPasswd() {
		return passwd;
	}
	public boolean validate() {
		if(passwd.equals("admin")) 
			return true;
		else
			return false;
	}
}
