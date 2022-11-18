using Project2.Areas.Teacher.Models;
using Project2.Models;

namespace Project2.Repository.IRepository
{
    public interface ICourseRepository : IRepository<Course>
    {
        void Update(Course course);
        void Save();
        void UpdateStudentCount();
    }
}
