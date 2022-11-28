using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace StudentManager.Models
{
    public class Student
    {
        //[Remote("IDExists", "Student", ErrorMessage = "ID already exists")]
        //[RegularExpression(@"^(\d{6})$", ErrorMessage = "Student ID must be 6-digit numbers")]
        [Display(Name = "ID")]
        public int Id { get; set; }

        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Middle Name")]
        public string? MiddleName { get; set; }

        [Display(Name = "Birth Date")]
        [DataType(DataType.Date)]
        public DateTime? DOB { get; set; }

        public string? Grade { get; set; }
        //public virtual ICollection<Course> Courses{ get; set; }
    }

    public enum Grade
    {
        N,
        A,
        B,
        C,
        D,
        F
    }
}