import axios from 'axios';
import { stringify } from 'qs';

export function getBlogs() {
  return axios.get("http://localhost:1337/blog-posts/?_sort=Created:DESC");
}

export function getBlog(id) {
    return axios.get(`http://localhost:1337/blog-posts/${id}`);
  }

export function getBlogsFiltered(tags, text) {
    const newTags = tags.map(tag => {
        return tag.replace(' ', '_')
    })

    let urlString;
    if (text !== "" && tags.length > 0) {
        const query = stringify({ 
            _where: { 
                    _or: 
                        [
                            [{ Tag1: newTags }, { Content_contains: text }], 
                            [{ Tag2: newTags }, { Content_contains: text }],
                            [{ Tag3: newTags }, { Content_contains: text }],
                        ]
            }
        })
        urlString = `http://localhost:1337/blog-posts?_sort=Created:DESC&${query}`
    }
    else if (tags.length > 0) {
        const query = stringify({ 
            _where: { 
                _or: 
                    [
                        { Tag1: newTags }, 
                        { Tag2: newTags }, 
                        { Tag3: newTags }
                    ]
            }
        })
        urlString = `http://localhost:1337/blog-posts?_sort=Created:DESC&${query}`
    }
    else if (text !== "") {
        const query = stringify({ 
            _where: { 
                Content_contains: text
            }
        })
        urlString = `http://localhost:1337/blog-posts?_sort=Created:DESC&${query}`
    }
    else {
        urlString = `http://localhost:1337/blog-posts?_sort=Created:DESC`
    }
    return axios.get(urlString);
}

export function getSimilarBlogs(tag, title) {
    const query = stringify({ 
        _where: [
            { Tag1: tag },
            { Title_ne: title }
        ]
    })
    return axios.get(`http://localhost:1337/blog-posts?_sort=Created:DESC&${query}`);
}