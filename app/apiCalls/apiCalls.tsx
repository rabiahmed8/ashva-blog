import axios from 'axios';
import { Details } from '../components/ContactForm';


export async function getBlogList(base_url:string) {
    try {
        const response = await axios.get(`${base_url}get-blog-list`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog list:', error);
    }
}



export async function getBlogImage(base_url:string) {
    try {
        const response = await axios.get(`${base_url}get-blog-image`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog image:', error);
    }
}


export async function getBlogContent(base_url:string) {
    try {
        const response = await axios.get(`${base_url}get-blog-content`);
        return response.data;
    } catch (error) {
        console.error('Error fetching blog content:', error);
    }
}

export async function contactForm(base_url:string, details:Details) {
    try {
        axios.post(base_url, { details })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
        console.error('Error fetching blog content:', error);
    }
}


