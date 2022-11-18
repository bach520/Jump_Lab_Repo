using Microsoft.Build.Framework;

namespace Project2.Areas.Teacher.Models
{
    public class Course
    {
        public int Id { get; set; }

        [Required]
        public string CourseName { get; set; }
        public int StudentCount { get; set; }

        public void AddStudent()
        {
            StudentCount++;
        }
    }
}
