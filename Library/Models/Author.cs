using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Library.Models
{
    public class Author
    {   
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string LName { get; set; }
        public string MName { get; set; }
    }
}
