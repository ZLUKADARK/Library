﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Library.Models
{
    public class Book
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Genre { get; set; }
        public DateTime ReleseDate { get; set; }

        public int AuthorId { get; set; }
        public Author Author { get; set; }

    }
}
