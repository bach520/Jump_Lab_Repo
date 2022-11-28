using StudentManager.Models;

namespace StudentManager.Repository.IRepository
{
    public interface IStudentRepository : IRepository<Student>
    {
        bool IDNotExist(int Id);
        void Update(Student student);
    }
}
