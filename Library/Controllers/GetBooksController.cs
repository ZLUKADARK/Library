using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.Data;
using Library.Models;

namespace Library.Controllers
{
    public class GetBooksController : Controller
    {
        // GET: GetBooksController
        public ActionResult Index()
        {
            List<int> BookId = new List<int>();
            List<string> BookName = new List<string>();
            List<string> BookGenre = new List<string>();
            List<string> BookAuthor = new List<string>();
            List<DateTime> BookReleseDate = new List<DateTime>();

            using (ApplicationDbContext context = new ApplicationDbContext())
            {
                var list = context.Books.ToList();

                foreach (Book item in list)
                {

                    BookId.Add(item.Id);
                    BookName.Add(item.Name);
                    BookGenre.Add(item.Genre);
                    BookAuthor.Add(item.Author);
                    BookReleseDate.Add(item.ReleseDate);
                }

                
                return View();
        }

        // GET: GetBooksController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: GetBooksController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: GetBooksController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: GetBooksController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: GetBooksController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: GetBooksController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: GetBooksController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
