@RestController
public class Controller {

    @GetMapping("/shipping")
    public String shipping() {
        return "Toy shipping calculated successfully";
    }
}

