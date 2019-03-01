using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace clinicapp.Models
{
    public class Student
    {
    [Required(ErrorMessage="cant be empty")]
        [Display(Name="Student Name")]
       // [RegularExpression()]
        public string Sname { get; set; }
    [Required(ErrorMessage = "cant be empty")]
    [Display(Name = "Student Address")]
        [DataType(DataType.MultilineText)]
        public string Saddress { get; set; }
        [Required(ErrorMessage = "cant be empty")]
        [Display(Name="Student Email")]
        [DataType(DataType.EmailAddress)]
        public string Semail { get; set; }
        public string Gender  { get; set; }
        public Course CourseList { get; set; }
        [Required(ErrorMessage = "cant be empty")]
        [Display(Name = "Student UserName")]
        // [RegularExpression()]
        public string Susername{ get; set; }
        [Required(ErrorMessage = "8 characters")]
        [Display(Name = "Student Password")]
        // [RegularExpression()]
        public string Spassword{ get; set; }
        [Required(ErrorMessage = "8 characters")]
        [Display(Name = "Student Confirmpassword")]
        // [RegularExpression()]
        public string Sconfirmpassword{ get; set; }

    }
   
    public enum Course
    {
        MCA,
        BCA,
        Mtech
    }
}