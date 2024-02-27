export interface PinContent {
    key?: number;
    className?: string;
    message: string;
  }

export interface BlogData {
    blog_id: string;
    title: string;
    subtitle: string;
    img_src: string;
    intro_text: string;
    author: string;
    timestamp: string;
    sections: { heading: string; paragraph: string }[];
  }
