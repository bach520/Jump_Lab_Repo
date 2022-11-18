using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
//using Project2.Areas.Teacher.Data;
using Project2.Areas.Teacher.Models;
using Project2.Models;
using Project2.Repository.IRepository;

namespace Project2.Areas.Teacher.Controllers
{
    [Area("Teacher")]
    public class CourseController : Controller
    {
        private readonly ICourseRepository _db;

        public CourseController(ICourseRepository context)
        {
            _db = context;
        }

        // GET: Teacher/Course
        public async Task<IActionResult> Index()
        {
            IEnumerable<Course> objCategoryList = _db.GetAll();
            return View(objCategoryList);
        }

        // GET: Teacher/Course/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == 0 || _db == null)
            {
                return NotFound();
            }

            var student = _db.GetFirstOrDefault(m => m.Id == id);

            if (student == null)
            {
                return NotFound();
            }

            return View(student);
        }

        // GET: Teacher/Course/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Teacher/Course/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("Id,CourseName,StudentCount")] Course course)
        {
            if (ModelState.IsValid)
            {
                _db.Insert(course);
                _db.Save();
                return RedirectToAction(nameof(Index));
            }
            return View(course);
            if (ModelState.IsValid)
            {
                _db.Insert(course);
                _db.Save();
                TempData["success"] = "Course added successfully";
                return RedirectToAction(nameof(Index));
            }
            return View(course);
        }

        // GET: Teacher/Course/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _db == null)
            {
                return NotFound();
            }

            var course = _db.GetFirstOrDefault(u => u.Id == id);
            if (course == null)
            {
                return NotFound();
            }
            return View(course);
        }

        // POST: Teacher/Course/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, [Bind("Id,CourseName,StudentCount")] Course course)
        {
            if (id != course.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _db.Update(course);
                _db.Save();
                return RedirectToAction(nameof(Index));
            }
            return View(course);
        }

        // GET: Teacher/Course/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _db == null)
            {
                return NotFound();
            }

            var course = _db.GetFirstOrDefault(m => m.Id == id);
            if (course == null)
            {
                return NotFound();
            }

            return View(course);
        }

        // POST: Teacher/Course/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_db == null)
            {
                return Problem("Entity set 'CourseContext.Course'  is null.");
            }
            var course = _db.GetFirstOrDefault(u => u.Id == id);
            if (course != null)
            {
                _db.Delete(course);
            }
            
            _db.Save();
            return RedirectToAction(nameof(Index));
        }

        /*private bool CourseExists(int id)
        {
          return _db.Course.Any(e => e.Id == id);
        }*/
    }
}
