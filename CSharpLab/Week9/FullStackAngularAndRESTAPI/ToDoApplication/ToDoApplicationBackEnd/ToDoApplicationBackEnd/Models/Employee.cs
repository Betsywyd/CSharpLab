using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ToDoApplicationBackEnd.Models;

public partial class Employee
{
    [Key]
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? Hours { get; set; }

    public string? Title { get; set; }

    public virtual ICollection<ToDo> ToDos { get; set; } = new List<ToDo>();
}
