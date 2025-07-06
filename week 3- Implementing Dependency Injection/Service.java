package lib;

public class Service {
    private Repo repo;

    public void setRepo(Repo repo) {
        this.repo = repo;
    }

    public void add(String book) {
        System.out.println("Adding: " + book);
        repo.save(book);
    }
}
