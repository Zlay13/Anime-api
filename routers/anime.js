const AxiosService = require("../helpers/axiosService");
const router = require("express").Router();
const cheerio = require("cheerio");

// home -------Done------
router.get("/", async (req, res) => {
  let url = "https://m.meownime.ai/";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// home -------Done------
router.get("/ongoing", async (req, res) => {
  let url = "https://m.meownime.ai/tag/ongoing";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// home -------Done------
router.get("/batch", async (req, res) => {
  let url = "https://m.meownime.ai/tag/batch";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// home -------Done------
router.get("/movie", async (req, res) => {
  let url = "https://m.meownime.ai/tag/movie";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// detail -------Done------
router.get("/detail/:param", async (req, res) => {
  const param = req.params.param;

  let url = `https://m.meownime.ai/${param}`;

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let admin = $("div.post-inner-content > header > div > span.byline > span > a").text().trim();
      let tanggal_posting = $(
          "div > header > div.entry-meta > span.posted-on > a > time.entry-date.published"
        )
        .text()
        .trim();
      let url_poster = $("div.post-inner-content > div > div > p > img").attr("src");
      let url_gambar = $("img").attr("src").trim();
      let judul_anime = $("div > header > h1").text().trim();
      let judul_alternatif = $("div.post-inner-content > div > ul > li:nth-child(2)").text().substring(19).trim();
      let tipe_anime = $("div.post-inner-content > div > ul > li:nth-child(3) > a").text().trim();
      let tipe_link = $("div.post-inner-content > div > ul > li:nth-child(3) > a").attr("href").trim();
      tipe_link = tipe_link.replace("https://m.meownime.ai/type/", "");
      let status_anime = $("div.post-inner-content > div > ul > li:nth-child(4)").text().substring(15).trim();
      let jumlah_episode = $("div > div > ul > li.Episodex");

      jumlah_episode == undefined || jumlah_episode == null ?
        (jumlah_episode = "Ongoing") :
        (jumlah_episode = $("div > div > ul > li.Episodex").text().substring(17));

      let musim_rilis = $("div.post-inner-content > div > ul > li:nth-child(6)").text().substring(14).trim();
      let tanggal_tayang = $("div.post-inner-content > div > ul > li:nth-child(7)").text().substring(16).trim();
      let studio = $("div > div > ul > li.Studiox > a").text().trim().trim();
      let link_studio = $("div.post-inner-content > div > ul > li.Studiox > a").attr("href").trim();
      link_studio = link_studio.replace("https://m.meownime.ai/studio/", "");
      let durasi_per_eps = $("div.post-inner-content > div > ul > li:nth-child(9)").text().substring(21).trim();
      let genre = $("div > div > ul > li.Genrex").text().substring(8).trim();
      let score = $("div > div > ul > li.Scorex").text().substring(21).trim();

      let sinopsis = [];

      for (let j = 4; j <= 9; j++) {
        $(`div > div > p:nth-child(1n + ${j})`).each(function (i, e) {
          sinopsis[i] += $(this).text();
        });
      }

      let sec = [];

      $(`div.post-inner-content > div > div > h4:nth-child(2n)`).each(function (i, e) {
        sec[i] += $(this).text().trim();
      });

      if (sec.length == 0) {
        $(`div.post-inner-content > div > div > h4:nth-child(n)`).each(function (i, e) {
          sec[i] += $(this).text().trim();
        });
      }
      

      // let resolution = ['Mp4 240p', 'Mp4 360p', 'Mp4 480p', 'Mp4 720p', 'Mp4 1080p'];

      let resolution = [];
      $(`div.post-inner-content > div > div > div:nth-child(2) > div:nth-child(1n) > p > strong`).each(function (i, e) {
        resolution[i] = $(this).text().trim();
      });

      let via = [];

      $(`div.post-inner-content > div > div > table:nth-child(2n + 1) > tbody:nth-child(1) > tr:nth-child(2n) > td > a:nth-child(1n)`).each(function (i, e) {
        via[i] += $(this).text().trim();
      });

      if (via.length == 0) {
        $(`div.post-inner-content > div > div > table:nth-child(2n + 1) > tbody:nth-child(1) > tr:nth-child(2n) > td > span > a:nth-child(1n)`).each(function (i, e) {
          via[i] += $(this).text().trim();
        });
      }

      let link = [];

      $(`div.post-inner-content > div > div > table:nth-child(2n + 1) > tbody:nth-child(1) > tr:nth-child(2n) > td > a:nth-child(1n)`).each(function (i, e) {
        link[i] += $(this).attr("href").trim();
      });


      if (link.length == 0) {
        $(`div.post-inner-content > div > div > table:nth-child(2n + 1) > tbody:nth-child(1) > tr:nth-child(2n) > td > span > a:nth-child(1n)`).each(function (i, e) {
          link[i] += $(this).attr("href").trim();
        });
      }

      if (link.length == 0) {
        $(`div.post-inner-content > div > div > div:nth-child(2n) > div:nth-child(1) > p > a:nth-child(1n)`).each(function (i, e) {
          link[i] += $(this).attr("href").trim();
        });
      }

      let download = [];

      let via_link = [];

      for (let i = 0; i < via.length; i++) {
        const data = {
          via: via[i],
          link: link[i],
        }
        via_link.push(data);
      }

      for (let i = 0; i <= sec.length; i++) {
        for (let j = 0; j <= 4; j++) {
          const data = {
            sec: sec[i],
            url_link: via_link[j],
          }
          download.push(data);
        }
      }

      console.log(via_link);

      let trailer = $("div.post-inner-content > div > center > iframe").attr("src");

      url = url.replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");

      var data = [];
      for (let i = 0; i < 1; i++) {
        const detail = {
          admin: admin,
          tanggal_posting: tanggal_posting,
          url_poster: url_poster,
          url_gambar: url_gambar,
          path_anime: url,
          judul_anime: judul_anime,
          judul_alternatif: judul_alternatif,
          tipe_anime: tipe_anime,
          tipe_link: tipe_link,
          status_anime: status_anime,
          jumlah_episode: jumlah_episode,
          musim_rilis: musim_rilis,
          tanggal_tayang: tanggal_tayang,
          studio: studio,
          link_studio: link_studio,
          durasi_per_eps: durasi_per_eps,
          genre: genre,
          score: score,
          sinopsis: sinopsis[i],
          trailer: trailer,
          download: download,
        };
        data.push(detail);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data,
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
    console.log(response.status);
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
    console.log(err);
  }
});

// search -------Done------
router.get("/search/:param", async (req, res) => {
  let param = req.params.param;
  let url = `https://m.meownime.ai/?s=${param}`;

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// genre -------Done------
router.get("/genre", async (req, res) => {
  let url = "https://m.meownime.ai/genre";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      let $ = cheerio.load(response.data);

      let genre_anime = [];
      let link_genre = [];

      $(`#post-18 > div > div > ul > li:nth-child(1n) > a`).each(function (i, e) {
        genre_anime[i] = $(this).text().trim();
      });

      $(`#post-18 > div > div > ul > li:nth-child(1n) > a`).each(function (i, e) {
        link_genre[i] = $(this).attr("href").replace("https://m.meownime.ai/genres/", "https://manganim.herokuapp.com/anime/genre/");
      });

      var data = [];
      for (let i = 0; i < genre_anime.length; i++) {
        const genre = {
          genre_anime: genre_anime[i],
          link_genre: link_genre[i],
        };
        data.push(genre);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// genre -------Done------
router.get("/rekomendasi-anime", async (req, res) => {
  let url = "https://m.meownime.ai/rekomendasi-anime";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      let $ = cheerio.load(response.data);

      let judul_genre = [];
      let judul_anime = [];
      let link_anime = [];

      $(`div > ol > li:nth-child(n) > strong`).each(function (i, e) {
        judul_genre[i] = $(this).text().trim();
      });

      $(`div > ol > li:nth-child(n) > strong > a`).each(function (i, e) {
        judul_anime[i] = $(this).text().trim();
      });

      $(`div > ol > li:nth-child(n) > strong > a`).each(function (i, e) {
        link_anime[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      var data = [];
      for (let i = 0; i < judul_genre.length; i++) {
        const detail = {
          judul_genre: judul_genre[i],
          judul_anime: judul_anime[i],
          link_anime: link_anime[i],
        };
        data.push(detail);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
    console.log(err);
  }
});

// genre detail -------Done------
router.get("/genre/:param", async (req, res) => {
  let param = req.params.param;
  let url = `https://m.meownime.ai/genres/${param}`;

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      let current_page = $("#main > div.paginations > nav > div > span.page-numbers.current").text().trim();
      let total_page = $("#main > div.paginations > nav > div > a:nth-child(1n)").not('.page-numbers.next').text().substring(8).trim();

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        current_page: current_page,
        total_page: total_page,
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// genre pagination -------Done------
router.get("/genre/:param/page/:num", async (req, res) => {
  let param = req.params.param;
  let num = req.params.num;
  let url = `https://m.meownime.ai/genre/${param}/page/${num}`;

  if (url == `https://m.meownime.ai/genre/${param}/page/1`)
    url = `https://m.meownime.ai/genre/${param}`;

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let titles = [];
      let url_gambar = [];
      let detailUrl = [];

      $("div > div.out-thumb > h2 > a").each(function (i, e) {
        titles[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        detailUrl[i] = $(this).attr("href");
      });

      let current_page = $("#main > div.paginations > nav > div > span.page-numbers.current").text().trim();
      let total_page = $("#main > div.paginations > nav > div > a:nth-child(1n)").not('.page-numbers.next').text().substring(8).trim();

      var data = [];
      for (let i = 0; i < titles.length; i++) {
        const anime = {
          title: titles[i],
          url_gambar: url_gambar[i],
          detailUrl: detailUrl[i],
          current_page: current_page,
          total_page: total_page,
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      info: "exceed limit page",
    });
  }
});

// season -------Done------
router.get("/seasons", async (req, res) => {
  let url = "https://m.meownime.ai/seasons";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      let $ = cheerio.load(response.data);

      let title = [];
      let uri = [];

      $("#season > aside:nth-child(1n) > ul > div > div > ul > li > a").each(
        function (i, e) {
          title[i] = $(this).text().trim();
        }
      );

      $("#season > aside:nth-child(1n) > ul > div > div > ul > li > a").each(
        function (i, e) {
          uri[i] = $(this).attr("href");
        }
      );

      var data = [];
      for (let i = 0; i < title.length; i++) {
        const detail = {
          title: title[i],
          uri: uri[i],
        };
        data.push(detail);
      }

      data = data.slice(7);
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// studio -------Done------
router.get("/studio", async (req, res) => {
  let url = "https://m.meownime.ai/genre/#studio";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      let $ = cheerio.load(response.data);

      let title = [];
      let uri = [];

      $("#studio > aside:nth-child(1n) > ul > div > div > ul > li > a").each(
        function (i, e) {
          title[i] = $(this).text().trim();
        }
      );

      $("#studio > aside:nth-child(1n) > ul > div > div > ul > li > a").each(
        function (i, e) {
          uri[i] = $(this).attr("href");
        }
      );

      var data = [];
      for (let i = 0; i < title.length; i++) {
        const studio = {
          title: title[i],
          uri: uri[i],
        };
        data.push(studio);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// studio detail -------Done------
router.get("/studio/:param", async (req, res) => {
  let param = req.params.param;
  let url = `https://m.meownime.ai/studio/${param}`;

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      let current_page = $("#main > div.paginations > nav > div > span.page-numbers.current").text().trim();
      let total_page = $("#main > div.paginations > nav > div > a:nth-child(1n)").not('.page-numbers.next').text().substring(8).trim();

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        current_page: current_page,
        total_page: total_page,
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// studio pagination -------Done------
router.get("/studio/:param/page/:id", async (req, res) => {
  let param = req.params.param;
  let id = req.params.id;

  let url = `https://m.meownime.ai/studio/${param}/page/${id}`;
  if (url == `https://m.meownime.ai/studio/${param}/page/1`)
    url = `https://m.meownime.ai/studio/${param}`;

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let judul_anime = [];
      let url_gambar = [];
      let link_anime = [];

      let current_page = $("#main > div.paginations > nav > div > span.page-numbers.current").text().trim();
      let total_page = $("#main > div.paginations > nav > div > a:nth-child(1n)").not('.page-numbers.next').text().substring(8).trim();

      $("div > div.out-thumb > h1 > a").each(function (i, e) {
        judul_anime[i] = $(this).text();
      });

      $("div > a > img").each(function (i, e) {
        url_gambar[i] = $(this).attr("src");
      });

      $("div > a").each(function (i, e) {
        link_anime[i] = $(this).attr("href");
      });

      var data = [];
      for (let i = 0; i < judul_anime.length; i++) {
        const anime = {
          judul_anime: judul_anime[i],
          url_gambar: url_gambar[i],
          link_anime: link_anime[i],
        };
        data.push(anime);
      }
      return res.status(200).json({
        status: true,
        message: "success",
        current_page: current_page,
        total_page: total_page,
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

// schedule ------Done-----------
router.get("/jadwal-rilis", async (req, res) => {
  let url = "https://m.meownime.ai/jadwal-rilis";

  try {
    const response = await AxiosService(url);
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      let thumbnail = $("#main > img").attr("src");

      let anime_senin = [];
      let url_anime_senin = [];

      let anime_selasa = [];
      let url_anime_selasa = [];

      let anime_rabu = [];
      let url_anime_rabu = [];

      let anime_kamis = [];
      let url_anime_kamis = [];

      let anime_jumat = [];
      let url_anime_jumat = [];

      let anime_sabtu = [];
      let url_anime_sabtu = [];

      let anime_minggu = [];
      let url_anime_minggu = [];


      $("#post-16 > div > ul:nth-child(2) > li:nth-child(1n) > strong").each(function (
        i,
        e
      ) {
        anime_senin[i] = $(this).text().trim();
      });

      $("#post-16 > div > ul:nth-child(2) > li:nth-child(1n) > strong > a").each(function (
        i,
        e
      ) {
        url_anime_senin[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      $("#post-16 > div > ul:nth-child(4) > li:nth-child(1n) > strong").each(function (
        i,
        e
      ) {
        anime_selasa[i] = $(this).text().trim();
      });

      $("#post-16 > div > ul:nth-child(4) > li:nth-child(1n) > strong > a").each(function (
        i,
        e
      ) {
        url_anime_selasa[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      $("#post-16 > div > ul:nth-child(6) > li:nth-child(1n) > strong").each(function (
        i,
        e
      ) {
        anime_rabu[i] = $(this).text().trim();
      });

      $("#post-16 > div > ul:nth-child(6) > li:nth-child(1n) > strong > a").each(function (
        i,
        e
      ) {
        url_anime_rabu[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      $("#post-16 > div > ul:nth-child(8) > li:nth-child(1n) > strong").each(function (
        i,
        e
      ) {
        anime_kamis[i] = $(this).text().trim();
      });

      $("#post-16 > div > ul:nth-child(8) > li:nth-child(1) > strong > a").each(function (
        i,
        e
      ) {
        url_anime_kamis[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });


      $("#post-16 > div > ul:nth-child(10) > li:nth-child(1n) > strong").each(function (
        i,
        e
      ) {
        anime_jumat[i] = $(this).text().trim();
      });

      $("#post-16 > div > ul:nth-child(10) > li:nth-child(1n) > strong > a").each(function (
        i,
        e
      ) {
        url_anime_jumat[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });
      $("#post-16 > div > ul:nth-child(12) > li:nth-child(1n) > strong").each(function (
        i,
        e
      ) {
        anime_sabtu[i] = $(this).text().trim();
      });

      $("#post-16 > div > ul:nth-child(12) > li:nth-child(1n) > strong > a").each(function (
        i,
        e
      ) {
        url_anime_sabtu[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      $("#post-16 > div > ul:nth-child(14) > li:nth-child(1n)").each(function (
        i,
        e
      ) {
        anime_minggu[i] = $(this).text().trim();
      });

      $("#post-16 > div > ul:nth-child(14) > li:nth-child(1n) > strong > a").each(function (
        i,
        e
      ) {
        url_anime_minggu[i] = $(this).attr("href").replace("https://m.meownime.ai/", "https://manganim.herokuapp.com/anime/detail/");
      });

      var senin = [];

      for (let i = 0; i < anime_senin.length; i++) {
        const data = {
          judul_anime: anime_senin[i],
          link_anime: url_anime_senin[i],
        };
        senin.push(data);
      }

      var selasa = [];

      for (let i = 0; i < anime_selasa.length; i++) {
        const data = {
          judul_anime: anime_selasa[i],
          link_anime: url_anime_selasa[i],
        };
        selasa.push(data);
      }

      var rabu = [];

      for (let i = 0; i < anime_rabu.length; i++) {
        const data = {
          judul_anime: anime_rabu[i],
          link_anime: url_anime_rabu[i],
        };
        rabu.push(data);
      }

      var kamis = [];

      for (let i = 0; i < anime_kamis.length; i++) {
        const data = {
          judul_anime: anime_kamis[i],
          link_anime: anime_kamis[i],
        };
        kamis.push(data);
      }

      var jumat = [];

      for (let i = 0; i < anime_jumat.length; i++) {
        const data = {
          judul_anime: anime_jumat[i],
          link_anime: url_anime_jumat[i],
        };
        jumat.push(data);
      }

      var sabtu = [];

      for (let i = 0; i < anime_sabtu.length; i++) {
        const data = {
          judul_anime: anime_sabtu[i],
          link_anime: url_anime_sabtu[i],
        };
        sabtu.push(data);
      }

      var minggu = [];

      for (let i = 0; i < anime_minggu.length; i++) {
        const data = {
          judul_anime: anime_minggu[i],
          link_anime: url_anime_minggu[i],
        };
        minggu.push(data);
      }

      let data = [];

      const schedule = {
        senin: senin,
        selasa: selasa,
        rabu: rabu,
        kamis: kamis,
        jumat: jumat,
        sabtu: sabtu,
        minggu: minggu,
      };
      data.push(schedule);

      return res.status(200).json({
        status: true,
        message: "success",
        thumbnail: thumbnail,
        data
      });
    }
    return res.send({
      message: response.status,
      data: [],
    });
  } catch (err) {
    res.send({
      status: false,
      message: err,
      data: [],
    });
  }
});

module.exports = router;