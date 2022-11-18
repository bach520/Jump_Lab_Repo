using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project2.Models;

namespace Project2.Data
{
    public class StudentContext : DbContext
    {
        public StudentContext (DbContextOptions<StudentContext> options)
            : base(options)
        {
        }

        public DbSet<Project2.Models.Student> Student { get; set; } = default!;
        public DbSet<Project2.Areas.Teacher.Models.Course> Course { get; set; } = default!;
    }
}
