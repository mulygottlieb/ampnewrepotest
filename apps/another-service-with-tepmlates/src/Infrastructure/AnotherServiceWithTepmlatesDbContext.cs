using Microsoft.EntityFrameworkCore;

namespace AnotherServiceWithTepmlates.Infrastructure;

public class AnotherServiceWithTepmlatesDbContext : DbContext
{
    public AnotherServiceWithTepmlatesDbContext(
        DbContextOptions<AnotherServiceWithTepmlatesDbContext> options
    )
        : base(options) { }
}
