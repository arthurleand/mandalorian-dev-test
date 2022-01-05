package mandaloriandevtest.model;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

public class Task {
	public String key;
	
	@Size(min = 10)
	@Pattern(regexp = "^[a-zA-Z ][a-zA-Z0-9 ]+$")
	public String value;

	public Task(String key, @Size(min = 10) @Pattern(regexp = "^[a-zA-Z ][a-zA-Z0-9 ]+$") String value) {
		super();
		this.key = key;
		this.value = value;
	}
}
