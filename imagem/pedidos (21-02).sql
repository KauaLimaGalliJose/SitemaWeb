-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/02/2025 às 22:17
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `teste`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedidos` varchar(50) NOT NULL,
  `cliente` varchar(35) NOT NULL,
  `nomePedido` varchar(60) NOT NULL,
  `numF` int(2) DEFAULT NULL,
  `numeM` int(2) DEFAULT NULL,
  `descricaoPedido` text NOT NULL,
  `descricaoAlianca` text DEFAULT NULL,
  `largura` varchar(5) NOT NULL,
  `gravacaoInterna` varchar(250) DEFAULT NULL,
  `gravacaoExterna` varchar(250) DEFAULT NULL,
  `outrosClientes` varchar(60) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL,
  `parEstoqueF` varchar(30) DEFAULT NULL,
  `parEstoqueM` varchar(30) DEFAULT NULL,
  `parPedra` varchar(30) DEFAULT NULL,
  `parSemPedra` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedidos`, `cliente`, `nomePedido`, `numF`, `numeM`, `descricaoPedido`, `descricaoAlianca`, `largura`, `gravacaoInterna`, `gravacaoExterna`, `outrosClientes`, `imagem`, `parEstoqueF`, `parEstoqueM`, `parPedra`, `parSemPedra`) VALUES
('P10-2025-02-17', 'Mercado_Livre', 'sdfsdf', 10, 10, 'fsdfsdf', '1010', '2mm', '', '', '', '../imagem/aliança com tres frisos2_ACD_0.jpg', '', '$', '', ''),
('PE1-2025-02-18', 'Mercado_Livre', 'Vagner', 10, 10, '1010', '', '2mm', '', '', '', '../imagem/aliança com tres frisos2_ACD_0.jpg', '', '$', '', ''),
('PE2-2025-02-18', 'Mercado_Livre', 'Vagner', 10, 10, '1010', '', '2mm', '', '', '', '../imagem/aliança com tres frisos2_ACD_0.jpg', 'true', '$', '', ''),
('PE3-2025-02-18', 'Mercado_Livre', 'Vagner', 10, 10, '1010', '', '2mm', '', '', '', '../imagem/aliança com tres frisos2_ACD_0.jpg', 'true', '$true', '', ''),
('PE4-2025-02-18', 'Mercado_Livre', 'Vagner', 10, 10, '1010', '', '2mm', '', '', '', '../imagem/aliança com tres frisos2_ACD_0.jpg', '', '$', '', ''),
('PE5-2025-02-18', 'Mercado_Livre', 'Vagner', 10, 10, '1010', '', '2mm', '', '', '', '../imagem/aliança com tres frisos2_ACD_0.jpg', 'true', '$true', '', 'true');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedidos`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
