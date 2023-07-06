import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.css'],
})
export class ProfilePhotoComponent {
  selectedFile!: File | null;

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  // onUpload() {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('photo', this.selectedFile, this.selectedFile.name);

  //     this.httpClient.post('/api/upload', formData).subscribe((response) => {
  //       console.log('Upload success!', response);
  //       // Handle the server response as needed
}
