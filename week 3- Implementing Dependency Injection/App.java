package lib;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("ctx.xml");
        Service service = context.getBean("service", Service.class);
        service.add("To Kill a Mockingbird");
    }
}
