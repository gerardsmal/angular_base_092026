import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  imports: [MatButtonModule, MatDialogActions,MatDialogTitle, MatDialogContent],
  selector: 'app-delete-persona-dialog',
  styleUrl: './delete-persona-dialog.css',
  templateUrl: './delete-persona-dialog.html',
})
export class DeletePersonaDialog {
  persona: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeletePersonaDialog>,
  ) {
    if (data) {
      this.persona = data.persona;
    }
  }

  optionSelected(opt:any){
    this.dialogRef.close(opt);
  }
}
