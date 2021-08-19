<?php
// Include config file
require_once "config.php";
$name = $department = $company = "";
 
// Processing form data when form is submitted
if(isset($_POST["update"])){
    // Get hidden input value
    $id = $_GET["id"];
    
   
        // Prepare an update statement
        $sql = "UPDATE placement SET name=?, department=?, company=? WHERE sl_no=?";
         
        if($stmt = mysqli_prepare($con, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "sssi", $param_name, $param_department, $param_company, $param_id);
            
            // Set parameters
            $param_name = $name;
            $param_department = $department;
            $param_comapny = $company;
            $param_id = $id;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Records updated successfully. Redirect to landing page
                header("location: admin.php");
                exit();
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
         
        // Close statement
        mysqli_stmt_close($stmt);
    
    
    // Close connection
    mysqli_close($con);
}

?>