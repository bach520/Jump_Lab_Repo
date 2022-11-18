using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Project2.Data;
using Project2.Models;
using Project2.Repository.IRepository;

namespace Project2.Controllers
{
    public class StudentController : Controller
    {
        private readonly IStudentRepository _db;

        public StudentController(IStudentRepository context)
        {
            _db = context;
        }
        public JsonResult IDExists(int id)
        {
            return Json(_db.IDNotExist(id));
        }
        // GET: Student
        public IActionResult Index()
        {
            IEnumerable<Student> objCategoryList = _db.GetAll();
            return View(objCategoryList);
        }

        // GET: Student/Details/5
        public IActionResult Details(int id)
        {
            if (id == 0 || _db == null)
            {
                return NotFound();
            }

            //var student = _db.GetFirstOrDefault(m => m.Id == id);
            var student = _db.GetStudentById(id);

            if (student == null)
            {
                return NotFound();
            }

            return View(student);
        }

        // GET: Student/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Student/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create([Bind("Id,FirstName,LastName,MiddleName,DOB,Grade")] Student student)
        {
            if (ModelState.IsValid)
            {
                _db.Insert(student);
                _db.Save();
                TempData["success"] = "Student added successfully";
                return RedirectToAction(nameof(Index));
            }
            else
            {
                ModelState.AddModelError("CustomError", "Student ID must be 6-digit numbers");
            }
            return View(student);
        }

        // GET: Student/Edit/5
        public IActionResult Edit(int id)
        {
            if (id == 0 || _db == null)
            {
                return NotFound();
            }

            var student = _db.GetStudentById(id);
            if (student == null)
            {
                return NotFound();
            }
            return View(student);
        }

        // POST: Student/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, [Bind("Id,FirstName,LastName,MiddleName,DOB,Grade")] Student obj)
        {
            if (id != obj.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _db.Update(obj);
                _db.Save();
                return RedirectToAction(nameof(Index));
            }
            return View(obj);
        }

        // GET: Student/Delete/5
        public IActionResult Delete(int id)
        {
            if (id == 0 || _db == null)
            {
                return NotFound();
            }

            var student = _db.GetStudentById(id);
            if (student == null)
            {
                return NotFound();
            }

            return View(student);
        }

        // POST: Student/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var obj = _db.GetStudentById(id);
            if (obj == null)
            {
                return NotFound();
            }

            _db.Delete(obj);
            _db.Save();
            TempData["success"] = "Category Deleted successfully";
            return RedirectToAction("Index");
        }
    }
}
