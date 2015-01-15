#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.Assert.*;

public class SimpleTest {
    private static final Logger logger = LoggerFactory.getLogger(SimpleTest.class);

    @Test
    public void testSomething() {
        logger.info("TODO: do something here!");
    }
}
