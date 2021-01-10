import { SIZE, THEME } from "./constant";

const projects = [
  { 
    id: 'PRJ01',
    num: 1,
    thumb: {
      title: 'RYDANZ',
      desc: `Website design, Responsive design`,
      theme: THEME.LIGHT,
      imgPath: '/thumbnail01.jpg',
    },
    title: 'RYDANZ',
    desc: `라이단즈 홈페이지 신규 구축 프로젝트는 고객 신뢰, 전문장비를 바탕으로 만들어진 제품을\n
        사용자에게 기업 아이덴티티를 전달하고 라이단즈만의 기술 ,제품 등을 홍보하기 위한 목적으로\n
        프로젝트 방향으로 설정하였습니다`,
    info: {
      role: '메인&서브 디자인',
      designElement: {
        imgPath: ''
      },
      point: {
        keyword: 'Simple & User-Centric',
        desc: '심플하고 사용자 중심의 디자인을 추구',
      },
      colors: [
        {
          name: 'Main Color',
          color: '#004098',
        }, {
          name: 'Sub Color',
          color: '#f3f3f3',
        }
      ],
      fonts: [
        {
          name: 'Noto Sans KR',
          imgPath: '/font_notoSansKr.jpg'
        },{
          name: 'Poppins',
          imgPath: '/font_poppins.jpg'
        }
      ]
    },
    images: [
      {
        alt: '',
        imgPath: '',
        size: SIZE.LARGE,
      },{
        alt: '',
        imgPath: '',
        size: SIZE.MEDIUM,
      }
    ],
  },
  { 
    id: 'PRJ02',
    num: 2,
    thumb: {
      title: '오픈스토어',
      desc: `App design`,
      theme: THEME.DARK,
      imgPath: '/thumbnail02.jpg',
    },
    title: '오픈스토어',
    desc: `라이단즈 홈페이지 신규 구축 프로젝트는 고객 신뢰, 전문장비를 바탕으로 만들어진 제품을\n
        사용자에게 기업 아이덴티티를 전달하고 라이단즈만의 기술 ,제품 등을 홍보하기 위한 목적으로\n
        프로젝트 방향으로 설정하였습니다`,
    info: {
      role: '메인&서브 디자인',
      designElement: {
        imgPath: ''
      },
      point: {
        keyword: 'Simple & User-Centric',
        desc: '심플하고 사용자 중심의 디자인을 추구',
      },
      colors: [
        {
          name: 'Main Color',
          color: '#004098',
        }, {
          name: 'Sub Color',
          color: '#f3f3f3',
        }
      ],
      fonts: [
        {
          name: 'Noto Sans KR',
          imgPath: '/font_notoSansKr.jpg'
        },{
          name: 'Poppins',
          imgPath: '/font_poppins.jpg'
        }
      ]
    },
    images: [
      {
        alt: '',
        imgPath: '',
        size: SIZE.LARGE,
      },{
        alt: '',
        imgPath: '',
        size: SIZE.MEDIUM,
      }
    ],
  },
];

const projectThumbs = projects.map(({num, thumb}) => {
  thumb.path = num
  return thumb
})

export { projects, projectThumbs };