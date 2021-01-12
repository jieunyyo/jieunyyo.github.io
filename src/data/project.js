import { THEME } from "./constant";

const projects = [
  { 
    id: 'PRJ01',
    num: 1,
    thumb: {
      title: 'RYDANZ',
      desc: `Website design`,
      theme: THEME.LIGHT,
      imgPath: '/thumbnail01.jpg',
    },
    title: 'RYDANZ',
    desc: `라이단즈 홈페이지 신규 구축 프로젝트는 고객 신뢰, 전문장비를 바탕으로 만들어진 제품을\n 사용자에게 기업 아이덴티티를 전달하고 라이단즈만의 기술, 제품 등을 홍보하기 위한 목적으로\n 프로젝트 방향으로 설정하였습니다`,
    info: {
      role: '메인&서브 디자인',
      designElement: `라이단즈의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
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
      images: [
        {
          name: 'Font',
          imgPath: '/project_rydanz_font.png',
        }
      ]
    },
    imgPath: '/project_rydanz.jpg',
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
    desc: `오픈 스토어 앱 디자인 프로젝트는 현재 시간과 위치를 기준으로\n 사용자 주변의 오픈한 상점들의 정보를 제공하는 어플입니다. 다양한 카테고리와 직관적인 ui에 중점을 두고\n 프로젝트 방향으로 설정하였습니다.`,
    info: {
      role: '메인&서브 디자인',
      designElement: `오픈스토어의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
      point: {
        keyword: 'Bright & Consistent',
        desc: '밝고 일관적인 디자인을 추구',
      },
      colors: [
        {
          name: 'Main Color',
          color: '#ffe200',
        }, {
          name: 'Sub Color',
          color: '#fc0452',
        }
      ],
      images: [
        {
          name: 'Logo branding',
          imgPath: '/project_openstore_logo.jpg',
        },
        {
          name: 'Font',
          imgPath: '/project_openstore_font.png',
        }
      ]
    },
    imgPath: '/project_openstore.jpg',
  },
  { 
    id: 'PRJ03',
    num: 3,
    thumb: {
      title: 'PITO',
      desc: `Website design`,
      theme: THEME.LIGHT,
      imgPath: '/thumbnail03.jpg',
    },
    title: 'PITO',
    desc: `PITO 홈페이지 신규 구축 프로젝트는 행복마루컨설팅의 내부제보 시스템입니다.\n기업의 IT기반의 컨설팅 이미지를 핵심적으로 부각할수있는 그래픽 이미지를 사용하였고\n원페이지 디자인을 통해 집약적이고 컨텐츠 중심으로 구축을 위한 목적으로 프로젝트 방향으로 설정하였습니다.`,
    info: {
      role: '메인디자인',
      designElement: `PITO의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
      point: {
        keyword: 'Intuitive & Simple',
        desc: '직관적이고 심플한 디자인을 추구',
      },
      colors: [
        {
          name: 'Main Color',
          color: '#003690',
        }, {
          name: 'Sub Color',
          color: '#16adfa',
        }
      ],
      images: [
        {
          name: 'Font',
          imgPath: '/project_pito_font.png',
        }
      ]
    },
    imgPath: '/project_pito.jpg',
  },
  { 
    id: 'PRJ04',
    num: 4,
    thumb: {
      title: '크래프톤',
      desc: `Subpage design`,
      theme: THEME.DARK,
      imgPath: '/thumbnail04.jpg',
    },
    title: '크래프톤',
    desc: `크래프톤 홈페이지 리뉴얼 프로젝트는 모바일 게임을 사용자에게  홍보하기 위한 목적으로\n진행한 프로젝트입니다. 새로운 CI와 어울리도록 최근 트랜드 디자인을 그래픽, 일러스트레이션을 기반으로\n 각 페이지 별 색상 통해  정확한 구분과 정보 전달을 위해 목적으로 프로젝트 방향으로 설정하였습니다.`,
    info: {
      role: '서브 디자인',
      designElement: `크래프톤의 컬러와 어울리는 페이지별의 다양한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
      point: {
        keyword: 'Open & Dynamic',
        desc: '유연하고 역동적인 디자인을 추구',
      },
      images: [
        {
          name: 'Font',
          imgPath: '/project_krafton_font.png',
        }
      ]
    },
    imgPath: '/project_krafton.jpg',
  },
  { 
    id: 'PRJ05',
    num: 5,
    thumb: {
      title: '본솔장학재단',
      desc: `Website design`,
      theme: THEME.DARK,
      imgPath: '/thumbnail05.jpg',
    },
    title: '본솔장학재단',
    desc: `본솔장학재단 홈페이지 리뉴얼 프로젝트는  콘텐츠를 중점적으로 보여주기 위해 불필요한 디자인 요소는\n최대한 배제하였으며 사람을 키우는 장학재단 슬로건을 반영하여 전체적으로 편안하고 밝은 느낌을 표현하는\n목적으로 프로젝트 방향으로 설정하였습니다.`,
    info: {
      role: '메인&서브 디자인',
      designElement: `PITO의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
      point: {
        keyword: 'Bright & Comfortable',
        desc: '밝고 편안한 디자인을 추구',
      },
      colors: [
        {
          name: 'Main Color',
          color: '#e69663',
        }, {
          name: 'Sub Color',
          color: '#f8f8f8',
        }
      ],
      images: [
        {
          name: 'Font',
          imgPath: '/project_bonsol_font.png',
        }
      ]
    },
    imgPath: '/project_bonsol.jpg',
  },
  { 
    id: 'PRJ06',
    num: 6,
    thumb: {
      title: '아로마티카',
      desc: `Product detail page redesign`,
      theme: THEME.LIGHT,
      imgPath: '/thumbnail06.jpg',
    },
    title: '아로마티카',
    desc: `아로마티카 리뉴얼 프로젝트는 천연 유기농화장품  브랜드인 기업의 아이덴티티를 반영함과 동시에\n전체적인 기본 컨셉은 컬러가 과하지 않은  심플함을 베이스로 하여 직관적이고 효과적인 정보 전달을\n목적으로 프로젝트 방향으로 설정하였습니다.`,
    info: {
      role: '메인디자인',
      designElement: `아로마티카의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
      point: {
        keyword: 'Simple & Eco-Friendly',
        desc: '심플하고 친환경적인 디자인을 추구',
      },
      colors: [
        {
          name: 'Main Color',
          color: '#04535b',
        }, {
          name: 'Sub Color',
          color: '#f4f4f4',
        }
      ],
      images: [
        {
          name: 'Font',
          imgPath: '/project_aromatica_font.png',
        }
      ]
    },
    imgPath: '/project_aromatica.jpg',
  },
];

const projectThumbs = projects.map(({num, thumb}) => {
  thumb.path = num
  return thumb
})

export { projects, projectThumbs };