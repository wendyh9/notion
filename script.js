function navigate(id) {

        //if you want the URL to open in the same window use '_parent'  instead of '_blank'

        if (id === "blog")
          window.open("https://blog.shorouk.dev", '_blank').focus(); //Add the url to your blog

        else if (id === "email") {
          window.open("mailto:someone@yoursite.com", '_blank').focus(); //Add your email after "mailto:""
        }

        else if (id === "facebook") {
          window.open("https://facebook.com/", '_blank').focus(); //Add the url to your facebook page or account
        }
        else if (id === "instagram") {
          window.open("instagram.com", '_blank').focus(); //Add the url to your instagram account
        }
        else if (id === "linkedin") {
          window.open("https://www.linkedin.com/", '_blank').focus(); //Add the url to your pinterest account
        }
        else if (id === "twitter") {
          window.open("https://twitter.com/", '_blank').focus(); //Add the url to your pinterest account
        }
        else if (id === "reddit") {
          window.open("https://www.reddit.com/", '_blank').focus(); //Add the url to your reddit account
        }
        else if (id === "tiktok") {
          window.open("https://www.tiktok.com/", '_blank').focus(); //Add the url to your tiktok account
        }
        else if (id === "youtube") {
          window.open("https://www.youtube.com/", '_blank').focus(); //Add the url to your youtube account
        }
        else if (id === "pinterest") {
          window.open("https://www.pinterest.com/", '_blank').focus(); //Add the url to your pinterest account
        }
        else if (id === "telegram") {
          window.open("https://web.telegram.org/", '_blank').focus(); //Add the url to your telegram account
        }
      }
