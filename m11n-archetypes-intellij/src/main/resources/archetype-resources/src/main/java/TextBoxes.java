#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.actionSystem.PlatformDataKeys;
import com.intellij.openapi.project.Project;

public class TextBoxes extends AnAction {

  public static final Dialog DIALOG = new Dialog();

  public void actionPerformed(AnActionEvent event) {
    Project project = event.getData(PlatformDataKeys.PROJECT);
    DIALOG.setSize(300,150);
    DIALOG.setLocation(500,500);
    DIALOG.setVisible(true);
  }
}
