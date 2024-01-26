<!DOCTYPE html>
<html>
  <head>
     <link rel="stylesheet" href="style.css">
  </head>
    <body>
      <header>Successful</header>
      <%!String username="Jayanta";
         String password="12345";
         public boolean isValid(String name,String pass){
            return this.username.equals(name) && this.password.equals(pass);
         }%>
       <%if("POST".equals(request.getMethod()) && request.getParameter("submit")!=null){
            String user=request.getParameter("user");
            String pass=request.getParameter("password");
            if(isValid(user,pass)){%>
              <div class="success">
                 <h2>Woo hoo.. Welcome <%=user%></h2>
                 <p>You have login into your account</p>
              </div>
          <%}
            else{%>
              <script>
                  alert("Wrong password or username !");
                  window.location="index.html";
              </script>
          <%}
         }%>
    </body>
</html>