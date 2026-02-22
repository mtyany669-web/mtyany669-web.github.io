// قائمة الفيديوهات الكاملة (81 فيديو)
const videoList = [
    // الفيديوهات القديمة (60 فيديو) - تمثل الروابط السابقة
    { id: 1, url: "https://e.top4top.io/m_3702anzpf1.mp4", title: "فيديو حصري 1", category: "gay", duration: "15:30" },
    { id: 2, url: "https://f.top4top.io/m_370233ki61.mp4", title: "فيديو حصري 2", category: "gay", duration: "12:45" },
    { id: 3, url: "https://g.top4top.io/m_3702kk1zp1.mp4", title: "فيديو حصري 3", category: "gay", duration: "18:20" },
    { id: 4, url: "https://h.top4top.io/m_3702z07vv1.mp4", title: "فيديو حصري 4", category: "lesbian", duration: "14:10" },
    { id: 5, url: "https://i.top4top.io/m_37022imgr1.mp4", title: "فيديو حصري 5", category: "lesbian", duration: "16:55" },
    { id: 6, url: "https://j.top4top.io/m_37026hfae1.mp4", title: "فيديو حصري 6", category: "lesbian", duration: "11:30" },
    { id: 7, url: "https://k.top4top.io/m_3702m4amg1.mp4", title: "فيديو حصري 7", category: "gay", duration: "13:45" },
    { id: 8, url: "https://l.top4top.io/m_3702pbp861.mp4", title: "فيديو حصري 8", category: "gay", duration: "17:20" },
    { id: 9, url: "https://a.top4top.io/m_3702cm3p91.mp4", title: "فيديو حصري 9", category: "lesbian", duration: "19:10" },
    { id: 10, url: "https://b.top4top.io/m_37022u7de1.mp4", title: "فيديو حصري 10", category: "gay", duration: "14:30" },
    { id: 11, url: "https://c.top4top.io/m_37023hrac1.mp4", title: "فيديو حصري 11", category: "gay", duration: "16:40" },
    { id: 12, url: "https://d.top4top.io/m_3702fvfdv1.mp4", title: "فيديو حصري 12", category: "lesbian", duration: "12:15" },
    { id: 13, url: "https://e.top4top.io/m_3702pmdvd1.mp4", title: "فيديو حصري 13", category: "gay", duration: "18:50" },
    { id: 14, url: "https://f.top4top.io/m_3702r17wn1.mp4", title: "فيديو حصري 14", category: "gay", duration: "15:25" },
    { id: 15, url: "https://g.top4top.io/m_370291c8y1.mp4", title: "فيديو حصري 15", category: "lesbian", duration: "13:35" },
    { id: 16, url: "https://h.top4top.io/m_3702o2k8t1.mp4", title: "فيديو حصري 16", category: "gay", duration: "17:45" },
    { id: 17, url: "https://i.top4top.io/m_3702w23cc1.mp4", title: "فيديو حصري 17", category: "gay", duration: "14:55" },
    { id: 18, url: "https://j.top4top.io/m_3702mbmm31.mp4", title: "فيديو حصري 18", category: "lesbian", duration: "16:10" },
    { id: 19, url: "https://l.top4top.io/m_3702rrqnl1.mp4", title: "فيديو حصري 19", category: "gay", duration: "12:30" },
    { id: 20, url: "https://b.top4top.io/m_3702wwtf31.mp4", title: "فيديو حصري 20", category: "gay", duration: "19:20" },
    { id: 21, url: "https://e.top4top.io/m_370293jsc1.mp4", title: "فيديو حصري 21", category: "lesbian", duration: "15:40" },
    { id: 22, url: "https://f.top4top.io/m_3702c5dic1.mp4", title: "فيديو حصري 22", category: "gay", duration: "13:50" },
    { id: 23, url: "https://g.top4top.io/m_3702fpamq1.mp4", title: "فيديو حصري 23", category: "gay", duration: "17:15" },
    { id: 24, url: "https://j.top4top.io/m_3702dd1o41.mp4", title: "فيديو حصري 24", category: "lesbian", duration: "14:20" },
    { id: 25, url: "https://i.top4top.io/m_3702d0lbj1.mp4", title: "فيديو حصري 25", category: "gay", duration: "16:30" },
    { id: 26, url: "https://k.top4top.io/m_3702u46k71.mp4", title: "فيديو حصري 26", category: "gay", duration: "18:45" },
    { id: 27, url: "https://l.top4top.io/m_3702641861.mp4", title: "فيديو حصري 27", category: "lesbian", duration: "12:55" },
    { id: 28, url: "https://b.top4top.io/m_3702hdird1.mp4", title: "فيديو حصري 28", category: "gay", duration: "15:35" },
    { id: 29, url: "https://d.top4top.io/m_37024mz4c1.mp4", title: "فيديو حصري 29", category: "gay", duration: "17:50" },
    { id: 30, url: "https://f.top4top.io/m_3702kww8g1.mp4", title: "فيديو حصري 30", category: "lesbian", duration: "13:25" },
    { id: 31, url: "https://e.top4top.io/m_3702tpnvw1.mp4", title: "فيديو حصري 31", category: "gay", duration: "16:15" },
    { id: 32, url: "https://g.top4top.io/m_3702au2kh1.mp4", title: "فيديو حصري 32", category: "gay", duration: "14:40" },
    { id: 33, url: "https://h.top4top.io/m_3702matrb1.mp4", title: "فيديو حصري 33", category: "lesbian", duration: "18:10" },
    { id: 34, url: "https://k.top4top.io/m_3702ka0uh1.mp4", title: "فيديو حصري 34", category: "gay", duration: "15:55" },
    { id: 35, url: "https://j.top4top.io/m_3702lrozj1.mp4", title: "فيديو حصري 35", category: "gay", duration: "12:20" },
    { id: 36, url: "https://i.top4top.io/m_3702ec3z01.mp4", title: "فيديو حصري 36", category: "lesbian", duration: "17:30" },
    { id: 37, url: "https://l.top4top.io/m_3702q7guj1.mp4", title: "فيديو حصري 37", category: "gay", duration: "13:45" },
    { id: 38, url: "https://k.top4top.io/m_370251mso1.mp4", title: "فيديو حصري 38", category: "gay", duration: "16:50" },
    { id: 39, url: "https://j.top4top.io/m_3702ap9d31.mp4", title: "فيديو حصري 39", category: "lesbian", duration: "14:15" },
    { id: 40, url: "https://i.top4top.io/m_3702g4fc01.mp4", title: "فيديو حصري 40", category: "gay", duration: "18:25" },
    { id: 41, url: "https://h.top4top.io/m_3702cneh21.mp4", title: "فيديو حصري 41", category: "gay", duration: "15:10" },
    { id: 42, url: "https://g.top4top.io/m_3702dfacl1.mp4", title: "فيديو حصري 42", category: "lesbian", duration: "12:40" },
    { id: 43, url: "https://e.top4top.io/m_3702up23r1.mp4", title: "فيديو حصري 43", category: "gay", duration: "17:55" },
    { id: 44, url: "https://d.top4top.io/m_3702p3adq1.mp4", title: "فيديو حصري 44", category: "gay", duration: "13:30" },
    { id: 45, url: "https://b.top4top.io/m_3702p08rt1.mp4", title: "فيديو حصري 45", category: "lesbian", duration: "16:20" },
    { id: 46, url: "https://k.top4top.io/m_3702ssrtt1.mp4", title: "فيديو حصري 46", category: "gay", duration: "14:50" },
    { id: 47, url: "https://l.top4top.io/m_3702hxiyd1.mp4", title: "فيديو حصري 47", category: "gay", duration: "18:35" },
    { id: 48, url: "https://f.top4top.io/m_37029i7n70.mp4", title: "فيديو حصري 48", category: "lesbian", duration: "15:45" },
    { id: 49, url: "https://g.top4top.io/m_37025c32h1.mp4", title: "فيديو حصري 49", category: "gay", duration: "12:15" },
    { id: 50, url: "https://h.top4top.io/m_3702foml52.mp4", title: "فيديو حصري 50", category: "gay", duration: "17:20" },
    { id: 51, url: "https://i.top4top.io/m_3702ysxpd3.mp4", title: "فيديو حصري 51", category: "lesbian", duration: "13:55" },
    { id: 52, url: "https://k.top4top.io/m_37021trdr5.mp4", title: "فيديو حصري 52", category: "gay", duration: "16:30" },
    { id: 53, url: "https://b.top4top.io/m_3702uwvm50.mp4", title: "فيديو حصري 53", category: "gay", duration: "14:10" },
    { id: 54, url: "https://h.top4top.io/m_3702rosm90.mp4", title: "فيديو حصري 54", category: "lesbian", duration: "18:45" },
    { id: 55, url: "https://i.top4top.io/m_3702hfqud1.mp4", title: "فيديو حصري 55", category: "gay", duration: "15:25" },
    { id: 56, url: "https://j.top4top.io/m_3702a7nwo2.mp4", title: "فيديو حصري 56", category: "gay", duration: "12:50" },
    { id: 57, url: "https://k.top4top.io/m_3702mdjes3.mp4", title: "فيديو حصري 57", category: "lesbian", duration: "17:35" },
    { id: 58, url: "https://l.top4top.io/m_3702hncqf4.mp4", title: "فيديو حصري 58", category: "gay", duration: "13:40" },
    { id: 59, url: "https://e.top4top.io/m_3702anzpf1.mp4", title: "فيديو حصري 59", category: "gay", duration: "16:15" },
    { id: 60, url: "https://f.top4top.io/m_370233ki61.mp4", title: "فيديو حصري 60", category: "lesbian", duration: "14:30" },
    
    // الفيديوهات الجديدة (21 فيديو) التي أرسلتها اليوم
    { id: 61, url: "https://e.top4top.io/m_37047vt081.mp4", title: "فيديو حصري 61", category: "gay", duration: "15:20" },
    { id: 62, url: "https://f.top4top.io/m_3704a1eb91.mp4", title: "فيديو حصري 62", category: "gay", duration: "13:45" },
    { id: 63, url: "https://g.top4top.io/m_3704qkgc61.mp4", title: "فيديو حصري 63", category: "lesbian", duration: "17:30" },
    { id: 64, url: "https://h.top4top.io/m_37041syce1.mp4", title: "فيديو حصري 64", category: "gay", duration: "14:15" },
    { id: 65, url: "https://i.top4top.io/m_3704eke0w1.mp4", title: "فيديو حصري 65", category: "gay", duration: "16:40" },
    { id: 66, url: "https://j.top4top.io/m_3704xb3pb1.mp4", title: "فيديو حصري 66", category: "lesbian", duration: "12:55" },
    { id: 67, url: "https://k.top4top.io/m_37049qoqc1.mp4", title: "فيديو حصري 67", category: "gay", duration: "18:10" },
    { id: 68, url: "https://l.top4top.io/m_3704ota8f1.mp4", title: "فيديو حصري 68", category: "gay", duration: "15:35" },
    { id: 69, url: "https://c.top4top.io/m_3704w2q5n1.mp4", title: "فيديو حصري 69", category: "lesbian", duration: "13:50" },
    { id: 70, url: "https://b.top4top.io/m_37040y3gr1.mp4", title: "فيديو حصري 70", category: "gay", duration: "17:25" },
    { id: 71, url: "https://e.top4top.io/m_3704w1zok1.mp4", title: "فيديو حصري 71", category: "gay", duration: "14:45" },
    { id: 72, url: "https://d.top4top.io/m_3704lojxw1.mp4", title: "فيديو حصري 72", category: "lesbian", duration: "16:20" },
    { id: 73, url: "https://f.top4top.io/m_3704y503r1.mp4", title: "فيديو حصري 73", category: "gay", duration: "12:30" },
    { id: 74, url: "https://g.top4top.io/m_37041f03m1.mp4", title: "فيديو حصري 74", category: "gay", duration: "18:55" },
    { id: 75, url: "https://f.top4top.io/m_3704spg5d1.mp4", title: "فيديو حصري 75", category: "lesbian", duration: "15:15" },
    { id: 76, url: "https://e.top4top.io/m_3704f3kxf1.mp4", title: "فيديو حصري 76", category: "gay", duration: "13:35" },
    { id: 77, url: "https://c.top4top.io/m_37043c2uf1.mp4", title: "فيديو حصري 77", category: "gay", duration: "17:50" },
    { id: 78, url: "https://l.top4top.io/m_3704fesar1.mp4", title: "فيديو حصري 78", category: "lesbian", duration: "14:25" },
    { id: 79, url: "https://k.top4top.io/m_3704507h51.mp4", title: "فيديو حصري 79", category: "gay", duration: "16:45" },
    { id: 80, url: "https://i.top4top.io/m_3704qqy2z1.mp4", title: "فيديو حصري 80", category: "gay", duration: "12:40" },
    { id: 81, url: "https://h.top4top.io/m_3704ayz7w1.mp4", title: "فيديو حصري 81", category: "lesbian", duration: "19:10" }
];

// دالة عرض الفيديوهات في الصفحة الرئيسية
function displayVideos(containerId, category = 'all', limit = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    let videosToShow = videoList;
    if (category !== 'all') {
        videosToShow = videoList.filter(v => v.category === category);
    }
    
    videosToShow = videosToShow.slice(0, limit);
    
    videosToShow.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.onclick = () => window.location.href = `videos/video${video.id}.html`;
        
        card.innerHTML = `
            <div class="video-thumb">
                <img src="https://via.placeholder.com/300x200/ff4b1f/ffffff?text=${encodeURIComponent(video.title)}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <h3>🔥 ${video.title}</h3>
                <div class="video-meta">
                    <span>👁️ ${Math.floor(Math.random() * 5 + 1)}.${Math.floor(Math.random() * 9)}K</span>
                    <span>⭐ ${(4 + Math.random()).toFixed(1)}</span>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// عرض الفيديوهات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('latestVideos')) {
        displayVideos('latestVideos', 'all', 6);
    }
    if (document.getElementById('popularVideos')) {
        // عكس الترتيب لمحاكاة الأكثر مشاهدة
        displayVideos('popularVideos', 'all', 6);
    }
});

// دالة البحث (يمكن استخدامها لاحقاً)
function searchVideos(query) {
    if (!query) return videoList;
    return videoList.filter(v => 
        v.title.includes(query) || 
        v.category.includes(query)
    );
}
