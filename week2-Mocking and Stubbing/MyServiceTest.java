import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import org.junit.Test;

public class MyServiceTest {

    @Test
    public void testFetchData() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}
