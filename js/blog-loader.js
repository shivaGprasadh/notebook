document.addEventListener('DOMContentLoaded', function() {
    // Function to get blog posts
    async function getBlogPosts() {
        try {
            // Fetch the list of blog posts (this would typically come from a server or API)
            // For this static implementation, we'll hardcode some recent posts
            const posts = [
                {
                    title: "HTTPS Handshaking and TLS Deep Dive",
                    url: "blog/https-handshaking-and-tls-deep-dive.html",
                    excerpt: "Understanding the secure connection establishment process between browsers and web servers through the TLS protocol.",
                    date: "April 26, 2025"
                },
                {
                    title: "The CIA Triad: Cornerstone of Information Security",
                    url: "blog/the-cia-triad-cornerstone-of-information-security.html",
                    excerpt: "Exploring the three fundamental principles of information security: Confidentiality, Integrity, and Availability.",
                    date: "April 26, 2025"
                },
                {
                    title: "Cybersecurity Best Practices for 2025",
                    url: "blog/cybersecurity-best-practices-for-2025.html",
                    excerpt: "Exploring the essential security practices every organization should implement to protect their digital assets.",
                    date: "April 15, 2025"
                },
                {
                    title: "Understanding Zero Trust Architecture",
                    url: "blog/understanding-zero-trust-architecture.html",
                    excerpt: "A deep dive into the Zero Trust security model and how it's revolutionizing enterprise security approaches.",
                    date: "May 22, 2025"
                },
                {
                    title: "The Rise of DevSecOps",
                    url: "blog/the-rise-of-devsecops.html",
                    excerpt: "How security is being integrated into the DevOps pipeline to ensure safer and more efficient application development.",
                    date: "June 10, 2025"
                },
                {
                    title: "Ransomware Protection and Recovery",
                    url: "blog/what-is-ransomware-protection-and-recovery.html",
                    excerpt: "Comprehensive strategies for protecting against, detecting, containing, and recovering from modern ransomware attacks.",
                    date: "April 27, 2025"
                },
                {
                    title: "OWASP Top 10 Security Risks",
                    url: "blog/owasp-top-10-security-risks.html",
                    excerpt: "A detailed look at the OWASP Top 10 web application security risks and how to mitigate them effectively.",
                    date: "April 28, 2025"
                },
                {
                    title: "Authentication vs. Authorization",
                    url: "blog/authentication-vs-authorization.html",
                    excerpt: "Understanding the critical differences between verifying identity and granting access rights in security systems.",
                    date: "April 30, 2025"
                },
                {
                    title: "Principle of Least Privilege",
                    url: "blog/principle-of-least-privilege.html",
                    excerpt: "How minimizing access rights to only what's necessary enhances security and reduces organizational risk.",
                    date: "May 1, 2025"
                }
            ];
            
            return posts;
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            return [];
        }
    }

    // Function to render posts on the home page
    async function renderRecentPosts() {
        const postsGrid = document.querySelector('.posts-grid');
        if (!postsGrid) return;
        
        // Remove loading message if it exists
        const loadingElement = postsGrid.querySelector('.post-loading');
        if (loadingElement) {
            loadingElement.textContent = "Fetching latest blog posts...";
        }
        
        const posts = await getBlogPosts();
        
        // Sort posts by date (most recent first)
        posts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        
        // Take the first 3 posts (most recent)
        const recentPosts = posts.slice(0, 3);
        
        // Clear existing posts
        postsGrid.innerHTML = '';
        
        // Add recent posts to the grid
        recentPosts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.className = 'post-card';
            
            postCard.innerHTML = `
                <h3 class="post-title"><a href="${post.url}">${post.title}</a></h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="${post.url}" class="read-more">Read More</a>
            `;
            
            postsGrid.appendChild(postCard);
        });
    }

    // Initialize the blog functionality
    renderRecentPosts();
});